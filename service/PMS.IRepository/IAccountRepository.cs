
using PMS.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PMS.IRepository
{
    public interface IAccountRepository
    {
        Task<IEnumerable<string>> RegisterUser(UserDTO user, string password);
        Task<UserDTO> FindAsync(string userName,string password);
        IEnumerable<string> UpdateUser(UserDTO userDTO);

        

    }
    
}
