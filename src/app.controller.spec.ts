import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it("should return \"Hello World!\"", () => {
      expect(appController.getHello()).toBe("Hello World!");
    });

    it("should return \"Love Love Love!\"", () => {
      expect(appController.getLove()).toBe("Love Love Love!");
    });

    it("should return food list", () => {
      expect(appController.getFood()).toBe("Cake Coffee Candy!");
    });
  });

});
