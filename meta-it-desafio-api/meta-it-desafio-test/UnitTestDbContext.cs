using meta_it_desafio_api.Data;
using meta_it_desafio_api.Model;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace meta_it_desafio_test
{
    public class Tests
    {
        string connectionTest = "User ID=postgres;Password=meta123!;Host=database.c8tjxzpehwzl.us-east-1.rds.amazonaws.com;Port=5432;Database=insighttest;Pooling=true;";
        
        [Fact]
        public void Add()
        {
            var options = new DbContextOptionsBuilder<DataContext>().UseNpgsql(connectionTest).Options;
            var context = new DataContext(options);

            var add = new Insight
            {
                Id = 1,
                Text = "Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro",
                DtCreate = DateTime.Now,
                DtUpdate = DateTime.Now
            };

            context.Insight.Add(add);
            context.SaveChanges();

            var result = context.Insight.Find(1);

            context.Remove(1);
            context.SaveChanges();

            Assert.Equals("Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro", result?.Text);
        }

        [Fact]
        public void Delete()
        {
            var options = new DbContextOptionsBuilder<DataContext>().UseNpgsql(connectionTest).Options;
            var context = new DataContext(options);

            var add = new Insight
            {
                Id = 1,
                Text = "Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro",
                DtCreate = DateTime.Now,
                DtUpdate = DateTime.Now
            };

            context.Insight.Add(add);
            context.SaveChanges();

            context.Remove(1);
            context.SaveChanges();

            var result = context.Insight.Find(1);

            Assert.IsTrue(result?.Id < 1);
        }

        [Fact]
        public void List()
        {
            var options = new DbContextOptionsBuilder<DataContext>().UseNpgsql(connectionTest).Options;
            var context = new DataContext(options);

            var add = new Insight
            {
                Id = 1,
                Text = "Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro",
                DtCreate = DateTime.Now,
                DtUpdate = DateTime.Now
            };

            var add2 = new Insight
            {
                Id = 2,
                Text = "Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro",
                DtCreate = DateTime.Now,
                DtUpdate = DateTime.Now
            };

            var add3 = new Insight
            {
                Id = 3,
                Text = "Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro",
                DtCreate = DateTime.Now,
                DtUpdate = DateTime.Now
            };

            context.Insight.Add(add);
            context.Insight.Add(add2);
            context.Insight.Add(add3);
            context.SaveChanges();

            var result = context.Insight.ToList();

            context.Remove(1);
            context.Remove(2);
            context.Remove(3);
            context.SaveChanges();

            Assert.IsTrue(result?.Count() == 3);
        }
    }
}