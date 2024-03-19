using Npgsql;

namespace DataAccessLayer
{
    public class SQLDataAccess
    {
        private const string  m_CONNECTION_STRING = "Host=localhost;Database=earthlyteatalesdb;Username=postgres;Password=postgres";

        protected NpgsqlConnection m_SQLConnection { get; set; }

        public SQLDataAccess()
        {
            m_SQLConnection = new NpgsqlConnection(m_CONNECTION_STRING);
        }

        public SQLDataAccess(string argsAlternative)
        {
            m_SQLConnection = new NpgsqlConnection(argsAlternative);
        }

    }
}
