// 회원과 관련된 라우터 모음

import { Router } from "express";
import userController from "../controllers/userController.ts";

const router = Router();

// /create -> 회원가입 담당
router.post("/create", userController.createUser);

// /update -> 회원수정 담당
router.put("/update", () => {});

// /withdraw -> 탈퇴 담당
router.delete("/delete", () => {});

// /login -> 로그인 담당
router.post("/login", userController.login);

export default router;
