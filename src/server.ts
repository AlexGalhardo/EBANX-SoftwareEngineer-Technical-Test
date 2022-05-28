import app from "./app";
import "dotenv/config";

app.listen(process.env.PORT || 3333, () =>
    console.log(`API server is running at ${process.env.PORT ?? 3333}`),
);
