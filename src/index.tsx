import { createRoot } from "react-dom/client";
import RootRouter from "./Router";
import "./global.css";
// import  from 'react-router-dom'

const root = createRoot(document.getElementById("root") ?? document.body);

root.render(<RootRouter />);
