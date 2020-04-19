
using PMS.Models;
using System.Threading.Tasks;

namespace PMS.IRepository
{
    public interface IAccountRepository
    {
        Task<bool> RegisterUser(UserDTO user, string password);
        Task<UserDTO> FindAsync(string userName,string password);
        
    }
    
}
