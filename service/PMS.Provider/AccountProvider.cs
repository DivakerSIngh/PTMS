using PMS.IProvider;
using PMS.IRepository;
using PMS.Models;
using System.Collections.Generic;
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
        public Task<IEnumerable<string>> RegisterUser(UserDTO user, string password)
        {
            return _userRepository.RegisterUser(user, password);
        }

        public Task<UserDTO> FindAsync(string userName, string password)
        {
            return _userRepository.FindAsync(userName, password);
        }

        public IEnumerable<string> UpdateUser(UserDTO userDTO)
        {
            return _userRepository.UpdateUser(userDTO);
        }

       
    }
}
