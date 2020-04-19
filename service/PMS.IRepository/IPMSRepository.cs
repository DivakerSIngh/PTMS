using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace PMS.IRepository
{
    public interface IPMSRepository<T> where T : class
    {
        T Get(int id);
        IQueryable<T> Get(Expression<Func<T, bool>> predicate);
        IQueryable<T> GetAll();
        IQueryable<T> GetAll(Expression<Func<T, bool>> predicate);
        T Add(T entity);
        void Add(List<T> entity);
        T Update(T entity);
        T Delete(T entity);
    }
}
