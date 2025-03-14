const express =require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require('./src/config/db');
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/vendors", require("./src/routes/vendorRoutes"));
app.use("/api/products", require("./src/routes/productRoutes"));
app.use("/api/orders", require("./src/routes/orderRoutes"));
app.use("/api/cart", require("./src/routes/cartRoutes"));
app.use("/api/payment", require("./src/routes/paymentRoutes"));
app.use("/api/reviews", require("./src/routes/reviewRoutes"));


app.use((req, res) => {
    res.status(404).json({ error: "API Endpoint Not Found" });
});    

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});  
