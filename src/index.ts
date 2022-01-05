import express from "express";
import path from "path";
import shopRoutes from "./routes/shop-routes";

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", shopRoutes);

app.listen(port, function () {
	console.log(`Listening on ${port}`);
});
