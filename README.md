
# MohollaMart

The One-stop Shopping Destination. E-commerce wesite that offers the most comprehensive shopping experience on the web
## Features
- **Role Based Access (Users/ Sellers/ Admin)**
    - Users :
        - All products 
        - Add to cart 
        - Add to wishlist 
        - Recent/ All orders
    - Sellers :
        - CRUD (Create, Read, Update, , Delete) operations on products , brands, seller profile.
        - All orders for seller by user
        - See monthly revenue.
    - Admin :
        - Revoke users, selllers, brands, products.
        - See all users, products, sellers
- **JWT Tokening**
    - JWT (users, seller, admin) verify for data access routes.
    - Token and Refresh Token management for session management.




## Contributing
- Lokesh Choudhary
- Aryan Sinha 
- Utkarsh 
- Sunil Ingole
- Nishant






## API Reference

#### Get all Users
```http
  GET /api/users
```
#### Get user
```http
 /api/users/${id}
```

#### Get Products
```http
  GET /api/products
```
#### Get Single Products 
```http
  GET /api/products/${id}
```
#### Delete Products
```http
  DELETE /api/products/${id}
```


## Support

For support, email lokesh.cdewanand@gmail.com or join our Slack channel.

