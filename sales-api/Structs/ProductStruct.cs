namespace Sales.Structs
{
    public class ProductStruct
    {
        public ProductStruct()
        {
            listBrand = new();
        }
        public List<BrandStruct> listBrand { get; set; }
    }
}
