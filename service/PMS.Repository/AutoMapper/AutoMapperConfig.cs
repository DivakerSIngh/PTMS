namespace PMS.Repository
{
    using AutoMapper;
    using PMS.Models;

    public interface IAutoMapperConfig
    {
        MapperConfiguration Initialize();
    }
    public class AutoMapperConfig :IAutoMapperConfig
    {
        public MapperConfiguration Initialize()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ApplicationUser, UserDTO>();
            });
           return config;
        }
    }
}
