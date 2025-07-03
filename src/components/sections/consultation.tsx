import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

const Consultation = () => {

  return (
    <Container id="consultation" className="lg:py-28 mb-16 mt-24 bg-slate-900 dark:bg-slate-950">
      <SectionTitle centered subtitle="Book a Free Consultation" title="Schedule a time to discuss your CRM needs with our experts" mode="dark" />

      <iframe 
          width='100%' 
          height='750px' 
          src='https://zoho-1base.zohobookings.com/portal-embed#/4754457000000044006' 
          frameBorder='0' 
          allowFullScreen
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        />
    </Container>
  );
};

export default Consultation;