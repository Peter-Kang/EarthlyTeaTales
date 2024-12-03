using DataAccessLayer.Model;
using System.Linq.Expressions;

namespace EarthlyTeaTalesAPI.Repository
{
    public class DBInitalizationRepository
    {
        public DBInitalizationRepository() { }

        public bool Init() 
        {
            try
            {
                Console.WriteLine("Initializing database");
                InitializationDB init = new InitializationDB();
                return init.init();

            } catch (Exception ex) 
            {
                Console.WriteLine(ex.ToString());
            }
            return false;
        }
    }
}
