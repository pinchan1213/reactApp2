// app.jsファイルとwebブラウザとの橋渡しを行っている
// 部品の取り出し
import React, { StrictMode } from "react";
// webブラウザとやり取りするためのReactライブラリ
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
