using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Model
{
    public class InitalizationDB : SQLDataAccess
    {

        public InitalizationDB():base() { }

        public void init()
        { // nothing should run before initalization, dont async this
            initiateSchema();
            initUserTable();
        }

        private void initiateSchema()
        {
            const string user_table_query = "CREATE SCHEMA IF NOT EXISTS EarthlyTeaTales;";
            NpgsqlCommand schema_create_command = new NpgsqlCommand(user_table_query, m_SQLConnection);
            m_SQLConnection.Open();
            schema_create_command.ExecuteReader(); // dont need results for now but we still want to wait for it to complete
            m_SQLConnection.Close();
        }

        private void initUserTable()
        {
            const string user_table_query =
@"CREATE TABLE IF NOT EXISTS EarthlyTeaTales.USERS (
    UserID varchar(36) PRIMARY KEY,
    Email varchar(320) UNIQUE,
    PW varchar(64),
    LastLoginOn TIMESTAMP DEFAULT NULL,
    CreatedOn TIMESTAMP DEFAULT ( TIMEZONE('UTC', NOW()) )
);";
            NpgsqlCommand table_create_command = new NpgsqlCommand(user_table_query, m_SQLConnection);
            m_SQLConnection.Open();//Only open for the time you need to send
            table_create_command.ExecuteReader(); // dont need results for now but we still want to wait for it to complete
            m_SQLConnection.Close();
        }
    }
}
