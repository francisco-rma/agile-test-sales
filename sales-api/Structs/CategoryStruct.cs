namespace Sales.Structs
{
    public class CategoryStruct
    {
        public CategoryStruct()
        {
            listProduct = new();
        }
        public List<ProductStruct> listProduct { get; set; }
    }
}
