using EarthlyTeaTalesAPI.Repository;

namespace EarthlyTeaTalesAPI.Services
{
    public class DBInitalizationService
    {
        public DBInitalizationService() { }

        public void Setup() 
        {
            new DBInitalizationRepository().Init();
        }
    }
}
