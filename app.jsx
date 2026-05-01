/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "color": "paper",
  "type": "swiss",
  "hero": "quiet",
  "dark": false
}/*EDITMODE-END*/;

function App() {
  const data = window.PORTFOLIO;
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const active = useActiveSection(["about", "stack", "projects", "experience", "contact"]);
  useReveal();

  // Apply theme + variant attrs to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", tweaks.dark ? "dark" : "light");
    root.setAttribute("data-color", tweaks.color);
    root.setAttribute("data-type", tweaks.type);
  }, [tweaks.dark, tweaks.color, tweaks.type]);

  const toggleTheme = () => setTweak("dark", !tweaks.dark);

  return (
    <>
      <Header
        active={active}
        theme={tweaks.dark ? "dark" : "light"}
        onToggleTheme={toggleTheme}
        name={data.shortName}
      />
      <main>
        <Hero variant={tweaks.hero} data={data} />
        <About data={data} />
        <Stack data={data} />
        <Projects data={data} />
        <Experience data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Color">
          <TweakRadio
            label="Tone"
            value={tweaks.color}
            onChange={(v) => setTweak("color", v)}
            options={[
              { value: "paper", label: "Paper" },
              { value: "warm",  label: "Warm" },
              { value: "cool",  label: "Cool" }
            ]}
          />
          <TweakToggle
            label="Dark mode"
            value={tweaks.dark}
            onChange={(v) => setTweak("dark", v)}
          />
        </TweakSection>
        <TweakSection title="Typography">
          <TweakRadio
            label="Pairing"
            value={tweaks.type}
            onChange={(v) => setTweak("type", v)}
            options={[
              { value: "swiss",     label: "Swiss" },
              { value: "editorial", label: "Editorial" },
              { value: "mono",      label: "Mono" }
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakRadio
            label="Layout"
            value={tweaks.hero}
            onChange={(v) => setTweak("hero", v)}
            options={[
              { value: "quiet",   label: "Quiet" },
              { value: "grid",    label: "Grid" },
              { value: "marquee", label: "Marquee" }
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
