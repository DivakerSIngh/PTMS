using System;
using System.Collections.Generic;
using System.Text;

namespace PMS.Framework
{
    public interface ILoggerManager
    {
        void Debug(string message);
        void Debug(string message, Exception exception);
        void Error(string message);
        void Error(string message, Exception exception);
        void Fatal(string message);
        void Fatal(string message, Exception exception);
        void Info(string message);
        void Info(string message, Exception exception);
        void Warning(string message);
        void Warning(string message, Exception exception);
        void HandleErrorLogging(string errorMessagePart, Exception ex);
    }
}
