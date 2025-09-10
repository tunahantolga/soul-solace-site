import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Mesajınız gönderildi!",
      description: "En kısa sürede size dönüş yapacağım.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <MessageSquare className="h-4 w-4 mr-2" />
                İletişim
              </div>
              <h1 className="text-4xl font-bold text-text-primary">
                Benimle İletişime Geçin
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Sorularınız için bana ulaşabilir, randevu alabilir veya terapi süreci hakkında bilgi alabilirsiniz
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    İletişim Formu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                          Ad Soyad *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınızı ve soyadınızı girin"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                          E-posta *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="E-posta adresinizi girin"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                          Telefon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Telefon numaranızı girin"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                          Konu *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Mesajınızın konusunu belirtin"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                          Mesaj *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Mesajınızı yazın..."
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                      size="lg"
                    >
                      Mesaj Gönder
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Hızlı İletişim
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">Telefon</p>
                          <a href="tel:+905321234567" className="text-primary hover:underline">
                            0532 123 45 67
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">E-posta</p>
                          <a href="mailto:dr.ibrahim.sari@gmail.com" className="text-primary hover:underline">
                            dr.ibrahim.sari@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">Adres</p>
                          <p className="text-text-secondary">
                            Nişantaşı Mahallesi<br />
                            Teşvikiye Caddesi No: 123<br />
                            Şişli, İstanbul
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <a href="https://calendly.com/dr-ibrahim-sari" target="_blank" rel="noopener noreferrer">
                        <Calendar className="h-4 w-4 mr-2" />
                        Online Randevu Al
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Working Hours */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Çalışma Saatleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Pazartesi - Cuma</span>
                        <span className="font-medium text-text-primary">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Cumartesi</span>
                        <span className="font-medium text-text-primary">09:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Pazar</span>
                        <span className="font-medium text-accent">Kapalı</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                      <p className="text-sm text-text-secondary">
                        <strong>Acil durumlar için:</strong> WhatsApp üzerinden 7/24 ulaşabilirsiniz. 
                        Acil olmayan durumlar için çalışma saatleri içinde dönüş yapılır.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="shadow-card">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="font-medium text-text-primary">Konum Haritası</p>
                        <p className="text-sm text-text-secondary">Nişantaşı, İstanbul</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Iletisim;