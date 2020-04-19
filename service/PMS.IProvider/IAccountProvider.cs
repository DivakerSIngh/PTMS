using PMS.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PMS.IProvider
{
   public interface IAccountProvider
    {
        Task<bool> RegisterUser(UserDTO user, string password);
        Task<UserDTO> FindAsync(string userName, string password);
    }
}
