import type { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const bootstrap = async () => {
	const LOCAL = 8080;
	const PORT = process.env.PORT || LOCAL;

	const app = await NestFactory.create(AppModule);
	const corsOptions: CorsOptions = {
		origin: "*",
		credentials: true,
	};
	app.enableCors(corsOptions);

	await app.listen(PORT);
};
bootstrap();
