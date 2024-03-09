import '@abraham/reflection';
import { RootModule } from './root.module';
import { createAppBuilder } from '@altv-mango/client';

const appBuilder = await createAppBuilder();
const app = appBuilder.build();
await app.start(RootModule);
