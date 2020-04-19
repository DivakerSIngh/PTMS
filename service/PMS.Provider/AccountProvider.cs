using PMS.IProvider;
using PMS.IRepository;
using PMS.Models;
using System.Threading.Tasks;

namespace PMS.Provider
{
    public class AccountProvider : IAccountProvider
    {
        private readonly IAccountRepository _userRepository;
        
        public AccountProvider(IAccountRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public Task<bool> RegisterUser(UserDTO user, string password)
        {
            return _userRepository.RegisterUser(user, password);
        }

        public Task<UserDTO> FindAsync(string userName, string password)
        {
            return _userRepository.FindAsync(userName, password);
        }
    }
}
