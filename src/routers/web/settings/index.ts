import Router from "koa-router"
import { WebRouterState, WebRouterCustom } from ".."
import myDevelopedApplicationsRouter from "./myDevelopedApplications"

const router = new Router<WebRouterState, WebRouterCustom>()

router.use("/my_developed_applications", myDevelopedApplicationsRouter.routes())

export default router