using System;
using System.Collections.Generic;
using System.Text;
using ESRI.ArcGIS.esriSystem;
using ESRI.ArcGIS.Server;


namespace arcgisservice
{
    class Program
    {
        static void Main(string[] args)
        {
            GISServerConnection connection = null;
            IServerObjectAdmin3 soa = null;


            try
            {
                connection = new GISServerConnection();
                connection.Connect(args[0]);
            }

            catch (Exception e)
            {
                Console.WriteLine("Could not connect to server. Make sure this user is a member of the AGSADMIN group.");
                Console.WriteLine(e.StackTrace);
                usage();
            }

            try
            {
                soa = (IServerObjectAdmin3)connection.ServerObjectAdmin;
                if (String.Compare(args[3], "stop") == 0)
                {
                    soa.StopConfiguration(args[1], args[2]);
                }

                else if (String.Compare(args[3], "start") == 0)
                {
                    soa.StartConfiguration(args[1], args[2]);
                }

                else
                {
                    Console.WriteLine("No recognizable command.  Choose from [stop | start].");
                    usage();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Error connecting to service. The service or service type does not exist. Check your case and spelling.");
                Console.WriteLine(e.StackTrace);
                usage();
            }
        }


        static void usage()
        {
            Console.WriteLine("Usage: arcgisservice [serverName] [serviceName] [serviceType] [start | stop]");
            Console.WriteLine("     Example: arcgisservice myServer myService MapServer stop");
            Environment.Exit(-1);
        }
    }
}