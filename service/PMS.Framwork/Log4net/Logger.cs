using log4net;
using log4net.Config;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;

namespace PMS.Framework
{
    public class Logger : ILogger
    {
        private const string CONFIG_PATH = "log4net.config";
        protected readonly ILog log4NetAdapter;

        public Logger()
        {
            var fileInfo = new FileInfo(AppDomain.CurrentDomain.BaseDirectory + Path.DirectorySeparatorChar + CONFIG_PATH);
            if (!fileInfo.Exists)
            {
                fileInfo = new FileInfo(AppDomain.CurrentDomain.BaseDirectory + Path.DirectorySeparatorChar + "bin" + Path.DirectorySeparatorChar + CONFIG_PATH);
            }
            XmlConfigurator.Configure(LogManager.GetRepository(Assembly.GetCallingAssembly()), fileInfo);
            
            log4NetAdapter = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        }

        public void HandleErrorLogging(string errorMessagePart, Exception ex)
        {
            var st = new StackTrace();
            var i = 2;
            var methodObj = default(MethodBase);
            while (i >= 0)
            {
                methodObj = st.GetFrame(i).GetMethod();
                if (methodObj != null)
                {
                    break;
                }
                --i;
            }
            if (methodObj == null)
            {
                Error($"{errorMessagePart}", ex);
            }
            else
            {
                var methodName = methodObj.Name;
                var className = methodObj.ReflectedType.FullName;
                Error($"{errorMessagePart}{className}.{methodName}", ex);
            }
        }

        public void Debug(string message)
        {
            if (!log4NetAdapter.IsDebugEnabled)
            {
                return;
            }
            log4NetAdapter.Debug(message);
        }

        public void Debug(string message, Exception exception)
        {
            if (!log4NetAdapter.IsDebugEnabled)
            {
                return;
            }
            log4NetAdapter.Debug(message, exception);
        }

        public void Error(string message)
        {
            if (!log4NetAdapter.IsErrorEnabled)
            {
                return;
            }
            log4NetAdapter.Error(message);
        }

        public void Error(string message, Exception exception)
        {
            if (!log4NetAdapter.IsErrorEnabled)
            {
                return;
            }
            log4NetAdapter.Error(message, exception);
            if (exception != null)
            {

            }
        }
        public void Fatal(string message)
        {
            if (!log4NetAdapter.IsFatalEnabled)
            {
                return;
            }
            log4NetAdapter.Fatal(message);
        }
        public void Fatal(string message, Exception exception)
        {
            if (!log4NetAdapter.IsFatalEnabled)
            {
                return;
            }
            log4NetAdapter.Fatal(message, exception);
        }
        public void Info(string message)
        {
            if (!log4NetAdapter.IsInfoEnabled)
            {
                return;
            }
            log4NetAdapter.Info(message);
        }
        public void Info(string message, Exception exception)
        {
            if (!log4NetAdapter.IsInfoEnabled)
            {
                return;
            }
            log4NetAdapter.Info(message, exception);
        }
        public void Warning(string message)
        {
            if (!log4NetAdapter.IsWarnEnabled)
            {
                return;
            }
            log4NetAdapter.Warn(message);
        }
        public void Warning(string message, Exception exception)
        {
            if (!log4NetAdapter.IsWarnEnabled)
            {
                return;
            }
            log4NetAdapter.Warn(message, exception);
        }
    }
}
