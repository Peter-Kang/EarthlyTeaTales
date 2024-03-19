using DataAccessLayer.Model;
using System.Linq.Expressions;

namespace EarthlyTeaTalesAPI.Repository
{
    public class DBInitalizationRepository
    {
        public DBInitalizationRepository() { }

        public void Init() 
        {
            try
            {
                Console.WriteLine("Initializing database");
                InitializationDB init = new InitializationDB();
                init.init();

            } catch (Exception ex) 
            {
                Console.WriteLine(ex.ToString());
                throw ex;
            }
        }
    }
}
