"use client";
import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { SystemSelector } from "../SystemSelector/SystemSelector";
import { TopBar } from "../TopBar/TopBar";
import { InfoButton } from "../InfoButton/InfoButton";
import { ProviderComponent } from "../ProviderComponent/ProviderComponent";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProviderComponent>
        <MainContent>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <InfoButton />
              <SystemSelector />
            </div>
          </TopBar>
          {children}
        </MainContent>
        <Footer />
      </ProviderComponent>
    </>
  );
};
