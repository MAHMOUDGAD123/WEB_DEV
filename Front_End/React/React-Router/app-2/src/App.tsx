import "./App.css";
import MemberInfo from "./components/MemberInfo";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";
import RootLayout from "./pages/RootLayout";
import AddNewPage from "./pages/AddNewPage";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// loaders
import { membersLoader, memberLoader } from "./pages/loaders";
// actions
import { addNewFormAction } from "./pages/actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
      <Route index element={<HomePage />} />
      <Route path="/members" element={<MembersPage />} loader={membersLoader} />
      <Route
        path="/members/:id"
        element={<MemberInfo />}
        loader={memberLoader}
      />
      <Route
        path="/members/add-new"
        element={<AddNewPage />}
        action={addNewFormAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
