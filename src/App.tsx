import React, { ReactNode } from "react";
import { CartProvider } from "./components/context";
import {
  CourseMenu,
  CocktailMenu,
  SidesMenu,
  NavBarComponent,
  FooterComponent,
  ShoppingCart,
  CheckoutForm,
  ConfirmationPage,
  ErrorPage,
  BrowserRouter,
  Routes,
  Route,
  InfoComponent,
  HomeComponent
} from "./components/index";
import styled from "styled-components";

import "./App.css";

const BodyBackgroundComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const MainComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
`;

const CourseMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 200px;
`;

const SidesMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
  margin: 0;
  padding: 0;
`;

const CocktailMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
  margin: 0;
  padding: 0;
`;

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBarComponent />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route
              path="/:InfoPart"
              element={
                <ErrorBoundary>
                  <BodyBackgroundComponent>
                    <MainComponent>
                      <CourseMenuContainer id="CourseMenu">
                        <CourseMenu />
                      </CourseMenuContainer>
                      <SidesMenuContainer id="SidesMenu">
                        <SidesMenu />
                      </SidesMenuContainer>
                      <CocktailMenuContainer id="CocktailMenu">
                        <CocktailMenu />
                      </CocktailMenuContainer>
                    </MainComponent>
                  </BodyBackgroundComponent>
                </ErrorBoundary>
              }
            ></Route>
            <Route path="/Info/:InfoPart" element={<>
              <InfoComponent />
            </>} />
            <Route path="/Shoppingcart" element={<>
              <ShoppingCart />
              <CheckoutForm />
            </>} />
            <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <FooterComponent />
        </CartProvider >
      </BrowserRouter >
    </>
  );
};

export default App;
