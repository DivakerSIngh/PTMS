using PMS.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PMS.IProvider
{
   public interface IAccountProvider
    {
        Task<IEnumerable<string>> RegisterUser(UserDTO user, string password);
        IEnumerable<string> UpdateUser(UserDTO userDTO);
        Task<UserDTO> FindAsync(string userName, string password);
    }
}
