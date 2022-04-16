import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const bootstrap = async () => {
	const LOCAL = 8080;
	const PORT = process.env.PORT || LOCAL;

	const app = await NestFactory.create(AppModule);
	app.enableCors({
		credentials: true,
		origin: "*",
	});
	await app.listen(PORT);
};
bootstrap();
