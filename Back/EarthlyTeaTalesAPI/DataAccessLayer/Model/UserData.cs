using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using Npgsql;
using System.Text.RegularExpressions;

namespace DataAccessLayer.Model
{
    public class UserData : SQLDataAccess
    {
        private const int MAX_EMAIL_LENGTH = 300;
        private const int PASSWORD_LENGTH = 64;

        UserData():base() { }

        public bool isEmailValid(string argsEmail)
        {
            bool isEmailLength = argsEmail.Length < MAX_EMAIL_LENGTH;
            if ( !isEmailLength ) 
            {
                throw new Exception("Email is too long");
            }
            try
            {
                MailAddress _ = new MailAddress(argsEmail);
                return true;
            }
            catch (FormatException) 
            {
                return false;
            }
        }

        public bool isPasswordHashValid(string argsPasswordHash) 
        {
            bool isPasswordLenghtCorrect = argsPasswordHash.Length == PASSWORD_LENGTH && Regex.IsMatch(argsPasswordHash, @"^[a-zA-Z0-9]+$");
            if (!isPasswordLenghtCorrect) 
            {
                throw new Exception("Password Hash is invalid");
            }
            return isPasswordLenghtCorrect;
        }

        public async Task<object?> AsyncCreateUser(string argsUserHash, string argsEmail, string argsPasswordHash ) 
        {
            string user_create = @"INSERT INTO EarthlyTeaTales.USERS (UserID, Email, PW) VALUES (@USERHASH, @EMAIL, @PWORD)";
            NpgsqlCommand create_command = new NpgsqlCommand(user_create, m_SQLConnection);
            NpgsqlParameter userHashParameter = new NpgsqlParameter()
            {
                Value = argsUserHash,
                ParameterName = "@USERHASH"
            };
            NpgsqlParameter emailParameters = new NpgsqlParameter()
            {
                Value = argsEmail,
                ParameterName = "@EMAIL"
            };
            NpgsqlParameter passwordHash = new NpgsqlParameter()
            {
                Value = argsPasswordHash,
                ParameterName = "PWORD"
            };
            //Add parameters
            create_command.Parameters.Add(userHashParameter);
            create_command.Parameters.Add(emailParameters);
            create_command.Parameters.Add(passwordHash);

            return await create_command.ExecuteScalarAsync();
        }

        public async Task<object?> AsyncUpdateUser(string argsUserHash, string argsEmail, string argsPasswordHash, int argsVersion) 
        {
            string user_create =
@"WITH row AS (
    UPDATE EarthlyTeaTales.USERS SET Email = @Email, PW = @PWORD, Version = Version+1 
    WHERE UserID = @USERHASH AND version >= @VERSION )
SELECT count(UserID) FROM rows";
            NpgsqlCommand update_command = new NpgsqlCommand(user_create, m_SQLConnection);

            //Parameters
            //Updated values
            NpgsqlParameter emailParameters = new NpgsqlParameter()
            {
                Value = argsEmail,
                ParameterName = "@EMAIL"
            };
            NpgsqlParameter passwordHash = new NpgsqlParameter()
            {
                Value = argsPasswordHash,
                ParameterName = "PWORD"
            };
                //where
            NpgsqlParameter userHashParameter = new NpgsqlParameter()
            {
                Value = argsUserHash,
                ParameterName = "@USERHASH"
            };
            NpgsqlParameter versionParameter = new NpgsqlParameter()
            {
                Value = argsVersion,
                ParameterName = "@VERSION"
            };

            //Add parameters
            update_command.Parameters.Add(userHashParameter);
            update_command.Parameters.Add(emailParameters);
            update_command.Parameters.Add(passwordHash);

            return await update_command.ExecuteScalarAsync();
        }

    }
}
