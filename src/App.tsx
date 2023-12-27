import "./global.css";
import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import SignupForms from "./_auth/forms/SignupForms";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForms />} />
        </Route>

        {/* Private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
