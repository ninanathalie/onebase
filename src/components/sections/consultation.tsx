import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

const Consultation = () => {
  return (
    <Container id="consultation" className="bg-blue-50">
      <SectionTitle 
        title="Book a Free Consultation" 
        subtitle="Schedule a time to discuss your CRM needs with our experts"
      />
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <iframe 
          width="100%" 
          height="750px" 
          src="https://zoho-1base.zohobookings.com/portal-embed#/4754457000000044006" 
          frameBorder="0" 
          allowFullScreen
        />
      </div>
    </Container>
  );
};

export default Consultation;