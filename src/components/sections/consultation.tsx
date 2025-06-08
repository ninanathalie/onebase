import { useEffect } from "react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

const Consultation = () => {
  useEffect(() => {
    const scriptId = "calendly-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Container id="consultation" className="lg:py-28 mb-16 mt-24 bg-slate-900">
      <SectionTitle centered subtitle="Book a Free Consultation" title="Schedule a time to discuss your CRM needs with our experts" mode="dark" />

      <div className="calendly-inline-widget -mt-8" data-url="https://calendly.com/mninanathalie/30min?text_color=020617&primary_color=ff8000" style={{ minWidth: "320px", height: "700px" }} />
    </Container>
  );
};

export default Consultation;