using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Sales.Models;

namespace Sales.Repositories
{
    public class Repository
    {
        public List<Category> ReadCategories()
        {
            string json = @"[{'idCategory':'1','categoryName':'Food'},
                            {'idCategory':'2','categoryName':'Automobiles'},
                            {'idCategory':'3','categoryName':'Peripherals' }]";

            //string json = "[{'idCategory':'1' ,'categoryName':'Food'},{'idCategory':'2','categoryName':'Automobiles'},{'idCategory':'3','categoryName':'Peripherals' }]";

            List<Category> listCategory = JsonConvert.DeserializeObject<List<Category>>(json);
            return listCategory;
        }

        public List<Product> ReadProducts()
        {
            string json = @"[{idProduct:1,idCategory:1,productName:'Cereals'},
                            {idProduct:2,idCategory:1,productName:'Chips'},
                            {idProduct:3,idCategory:1,productName:'Pasta' },
                            {idProduct:4,idCategory:2,productName:'Car' },
                            {idProduct:5,idCategory:2,productName:'Truck' },
                            {idProduct:6,idCategory:2,productName:'Scooter' },
                            {idProduct:7,idCategory:3,productName:'Keyboard' },
                            {idProduct:8,idCategory:3,productName:'Mouse' },
                            {idProduct:9,idCategory:3,productName:'Phone' },]";

            List<Product> listProduct = JsonConvert.DeserializeObject<List<Product>>(json);
            return listProduct;
        }

        public List<Brand> ReadBrands()
        {
            string json = @"[{idBrand:1,idProduct:1,brandName:'Kellogs'},
                            {idBrand:2,idProduct:1,brandName:'Fruit Loops'},
                            {idBrand:3,idProduct:2,brandName:'Ruffles' },
                            {idBrand:4,idProduct:2,brandName:'Doritos' },
                            {idBrand:5,idProduct:3,brandName:'Barilla' },
                            {idBrand:6,idProduct:3,brandName:'Garofalo' },
                            {idBrand:7,idProduct:4,brandName:'VW' },
                            {idBrand:8,idProduct:4,brandName:'Ford' },
                            {idBrand:9,idProduct:5,brandName:'Scania' },
                            {idBrand:10,idProduct:5,brandName:'Volvo' },
                            {idBrand:11,idProduct:6,brandName:'Vespa' },
                            {idBrand:12,idProduct:6,brandName:'Adiva' },
                            {idBrand:13,idProduct:7,brandName:'Logitech' },
                            {idBrand:14,idProduct:7,brandName:'Razer' },
                            {idBrand:15,idProduct:8,brandName:'Microsoft' },
                            {idBrand:16,idProduct:8,brandName:'SteelSeries' },
                            {idBrand:17,idProduct:9,brandName:'Bose' },
                            {idBrand:18,idProduct:9,brandName:'Senheiser' },]";

            List<Brand> listBrand = JsonConvert.DeserializeObject<List<Brand>>(json);
            return listBrand;
        }

        public List<Sale> ReadSales()
        {
            List<Sale> listSale = new();
            List<Brand> listBrand = ReadBrands();

            int idSale = 0;
            List<int> months = Enumerable.Range(1, 4).ToList();

            Random rng = new Random();

            foreach (Brand brand in listBrand)
            {
                foreach (int month in months)
                {
                    Sale sale = new Sale();
                    sale.idBrand = brand.idBrand;
                    sale.idSale = idSale;
                    sale.amount = rng.Next(1, 100);
                    sale.month = month;
                    listSale.Add(sale);
                    idSale++;
                }
            }
            return listSale;
        }
    }
}
