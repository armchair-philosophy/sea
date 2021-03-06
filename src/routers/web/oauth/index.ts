import Router from "koa-router"
import { WebRouterState, WebRouterCustom } from ".."
import authorizeRouter from "./authorize"
import tokenRouter from "./token"

const router = new Router<WebRouterState, WebRouterCustom>()

router.use("/authorize", authorizeRouter.routes())
router.use("/token", tokenRouter.routes())

export default router
