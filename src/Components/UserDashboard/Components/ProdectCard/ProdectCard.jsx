// import * as React from 'react';
// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import axios from 'axios';

// const CardItem = ({item,index})=>{
//   return(
// <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea className='container-for-products' >
//         <CardMedia
//           component="img"
//           height="140"
//           image={item.image}
//           alt="No Image found "
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {item.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {item.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           {item.cost}
//         </Button>
//       </CardActions>
//     </Card>
//   )
// }
// export default function ProdectCard() {
//   const [products,setProducts] = React.useState([])
//   const [isloading,setIsloading] = React.useState(true)
//   React.useEffect(()=>{
//     const url = 'http://localhost:5000/products/getallproducts'
//     axios.get(url)
//     .then(res=>{
//       setProducts(res.data)
//       setIsloading(false)
//     })
//     .catch(err=>setProducts([]))
//   })
//   return (
//     <>
//     {isloading ? (<h2>Loading....</h2>):(
//       <>{products.map((item,index)=>{return (<CardItem item={item} index={index}/>)})}</>
//     )}
//     </>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal, Box, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// Dummy data for products
const dummyProducts = [
  {
    name: 'Product 1',
    description: 'Description for product 1',
    image: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
    cost: '$10'
  },
  {
    name: 'Product 2',
    description: 'Description for product 2',
    image: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
    cost: '$20'
  },
  {
    name: 'Product 3',
    description: 'Description for product 3',
    image: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
    cost: '$30'
  },
  {
    name: 'Product 4',
    description: 'Description for product 3',
    image: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
    cost: '$30'
  },
  {
    name: 'Product 5',
    description: 'Description for product 3',
    image: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
    cost: '$30'
  }
];

const CardItem = ({ item, handleOpen }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard onClick={() => handleOpen(item)}>
        <CardActionArea>
          <StyledCardMedia
            component="img"
            height="150"
            image={item.image}
            alt="No Image found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="h6" color="text.primary" sx={{ flexGrow: 1 }}>
            {item.cost}
          </Typography>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  }
}));

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  bottom: 16,
  right: 16,
});

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: 'auto',
  borderRadius: 12,
  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
  },
  '& .MuiCardContent-root': {
    backgroundColor: '#f5f5f5',
  },
  '& .MuiCardActions-root': {
    backgroundColor: '#f5f5f5',
  },
  '& .MuiTypography-h5': {
    color: theme.palette.primary.main,
  },
  '& .MuiTypography-body2': {
    color: theme.palette.text.secondary,
  },
  '& .MuiButton-root': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const StyledCardMedia = styled(CardMedia)({
  objectFit: 'cover',
});

export default function ProdectCard() {
  const [products, setProducts] = React.useState(dummyProducts);
  const [isloading, setIsloading] = React.useState(true); // Set to false since we are using dummy data
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  React.useEffect(()=>{
    const url = `http://localhost:5000/products/getAllProducts`
    axios.get(url)
    .then(res=>{
      setProducts(res.data)
      setIsloading(false)
    })
  },[])
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };


  const handleClose = () => setOpen(false);
  const customerdata = JSON.parse(localStorage.getItem("userdata"))
  const handleAddToCart = (product) => {
    console.log('Add to Cart:', product);
    const list = [product]
    console.log(list)
    const url = `http://localhost:5000/users/addtocart/${customerdata._id}`
    axios.post(url,{userId:customerdata._id,Products:list})
    .then(res=>{
      toast.success("Added to cart ",{position:"top-center"})
    })
  };

  const navigate = useNavigate()
  const handleBuyNow = (product) => {
    console.log('Buy Now:', product);
    const list = [product]
    navigate("/payments",{state : list})
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <ToastContainer />
      {isloading ? (
        <Typography variant="h4" component="h2">Loading....</Typography>
      ) : (
        <Grid container spacing={4}>
          {products.map((item, index) => (
            <CardItem key={index} item={item} handleOpen={handleOpen} />
          ))}
        </Grid>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent sx={style}>
          {selectedProduct && (
            <>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedProduct.name}
              </Typography>
              <StyledCardMedia
                component="img"
                height="200"
                image={selectedProduct.image}
                alt="No Image found"
              />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
                {selectedProduct.cost}
              </Typography>
              <ButtonContainer>
                <Button size="small" color="primary" variant="outlined" sx={{ mr: 1 }} onClick={() => handleAddToCart(selectedProduct)}>
                  Add to Cart
                </Button>
                <Button size="small" color="secondary" variant="outlined" onClick={() => handleBuyNow(selectedProduct)}>
                  Buy Now
                </Button>
              </ButtonContainer>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}
