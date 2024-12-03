using EarthlyTeaTalesAPI.Repository;
using System.Threading;

namespace EarthlyTeaTalesAPI.Services
{
    public class DBInitalizationService
    {   
        const int MAX_FAIL_COUNT = 5;
        public DBInitalizationService() { }

        public void Setup() 
        {
            int failCount = 0;
            bool initialized = false;
            while ( initialized == false && failCount < MAX_FAIL_COUNT) 
            {
                try
                {
                    initialized = new DBInitalizationRepository().Init();
                }catch(Exception ex)
                {
                    if ( failCount >= MAX_FAIL_COUNT )
                    {// if we reached the fail count then we need to display the message
                        Console.WriteLine("Fail to connect to DB");
                        Console.WriteLine(ex.Message);
                    }
                    else
                    {// increment the fail count
                        failCount++;
                    }
                }
                //Check if we need to wait to restart
                if (initialized == false && failCount < MAX_FAIL_COUNT)
                {
                    Console.WriteLine("Waiting for DB");
                    Thread.Sleep(5000);
                }
            }
        }
    }
}
