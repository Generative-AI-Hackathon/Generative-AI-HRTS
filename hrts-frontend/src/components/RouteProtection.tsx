import { Navigate, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "./Spinner"
import { toast } from "react-toastify"
import { resetAuthFaild } from "../redux";

type PrivateRouteProp = {
  routeType: "" | "doctor" | "patient" | "hospital" | "admin"
}

const RouteProtection: React.FC<PrivateRouteProp> = ({ routeType }) => {

  const { authStatus, authError, userRole } = useSelector(state => state.auth)
  const dispatch = useDispatch()


  if (authStatus == "loading") {
    return <Spinner />
  }

  else if (authStatus == "failed") {
    toast.error(authError)
    dispatch(resetAuthFaild())
  }

  return userRole == routeType ? <Outlet /> : <Navigate to={`/${userRole}`} />

}
export default RouteProtection