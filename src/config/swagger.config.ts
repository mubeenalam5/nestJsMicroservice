import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Microservice')
    .setDescription('Microservice Backend Api')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
