import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Recycle,
  Smartphone,
  BarChart3,
  Leaf,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  QrCode,
  Award,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Recycle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Chakra</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
              Impact
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Get the App</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            Smart Technology for Sustainable Living
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Turning Waste into Value
            <span className="text-primary block">with Smart Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Chakra connects people, smart bins, and mobile apps to build a cleaner, greener future. Join the circular
            economy where waste becomes valuable resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get the App
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro & Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Smart Waste Management Revolution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission combines awareness, motivation, and technology to create cleaner cities through the power of
              connected smart bins and rewarding mobile experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border bg-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">📱 Mobile App with Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn points and rewards for responsible waste disposal while tracking your environmental impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">🗑️ Smart Waste Bins with Sensors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  IoT-enabled bins that automatically detect waste types and optimize collection schedules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">📊 Real-time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Live data analytics and monitoring for municipalities and waste management companies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">🌱 Eco-awareness & Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Educational content and community challenges that promote sustainable living practices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Chakra</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded on the belief that waste problems require innovative, technology-driven solutions that make
              sustainability rewarding and engaging for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              {`Chakra was born from witnessing the growing waste crisis in urban communities and the disconnect between
              people and sustainable practices. Our founders recognized that traditional waste management was
              reactive, not proactive.`}
            </p>
            <p className="text-muted-foreground">
              {`We envisioned a world where technology could bridge this gap, making waste management intelligent,
              rewarding, and community-driven. The name "Chakra" represents our core philosophy: the circular flow of
              resources where nothing truly ends as waste.`}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Vision & Mission</h3>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">Vision</h4>
                <p className="text-muted-foreground">
                  {`"To inspire sustainable living through technology."`}
                </p>
              </div>
              <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                <p className="text-muted-foreground">
                  {`"To help people dispose of waste responsibly, while making it rewarding and engaging."`}
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Core Values</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">Environmental responsibility in everything we do</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Cutting-edge technology for real-world solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Awareness</h4>
                <p className="text-sm text-muted-foreground">Education and consciousness about environmental impact</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">Building connections through shared environmental goals</p>
              </div>
            </div>
          </div>

          {/* Milestones Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Our Journey</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold text-card-foreground">Prototype Smart Bin Created</h4>
                  <p className="text-sm text-muted-foreground">
                    First IoT-enabled waste bin with sensor technology developed
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0"></div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold text-card-foreground">Mobile App Launch</h4>
                  <p className="text-sm text-muted-foreground">
                    Chakra mobile app released with rewards system and community features
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0"></div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold text-card-foreground">First Pilot Project</h4>
                  <p className="text-sm text-muted-foreground">
                    Successful deployment in partnership with local municipality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join the circular economy and make a positive environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">1. Dispose Waste</h4>
              <p className="text-sm text-muted-foreground">Drop your waste into a Chakra Smart Bin</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto hidden md:block" />

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">2. Scan QR Code</h4>
              <p className="text-sm text-muted-foreground">
                {`Use the Chakra mobile app to scan the bin's QR code`}
              </p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto hidden md:block" />

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">3. Auto Detection</h4>
              <p className="text-sm text-muted-foreground">System automatically detects and categorizes waste type</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">4. Earn Rewards</h4>
              <p className="text-sm text-muted-foreground">
                Collect points and rewards in your app for responsible disposal
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">5. Track Impact</h4>
              <p className="text-sm text-muted-foreground">Monitor your contribution to environmental sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="products" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Products & Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive smart waste management solutions for communities, businesses, and municipalities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chakra Mobile App */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Chakra Mobile App</CardTitle>
                <CardDescription>Gamified waste management with rewards and community features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Points system for responsible disposal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Waste sorting education and tips</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Real-time waste tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Community challenges and leaderboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chakra Smart Bin */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Chakra Smart Bin</CardTitle>
                <CardDescription>IoT-enabled bins with intelligent waste detection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Sensors to detect waste type automatically</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Connected to mobile app ecosystem</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Live monitoring for waste management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Solar-powered and weather-resistant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data & Analytics Dashboard */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Analytics Dashboard</CardTitle>
                <CardDescription>Comprehensive data insights for municipalities and businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Real-time waste collection data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Sustainability goal tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Route optimization recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Environmental impact reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Environmental Impact</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every day, Chakra helps communities transform waste into valuable resources, creating measurable
              environmental benefits and building sustainable futures.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.5M</div>
              <div className="text-muted-foreground">Tons Recycled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">89%</div>
              <div className="text-muted-foreground">Waste Diverted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150K</div>
              <div className="text-muted-foreground">Tons CO₂ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Communities Served</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Community Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  {`"Chakra has transformed how our community thinks about waste. The app makes recycling fun and rewarding!"`}
                </p>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Sarah Chen</p>
                      <p className="text-sm text-muted-foreground">Community Leader, Green Valley</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  {`"The smart bins have reduced our collection costs by 30% while improving recycling rates significantly."`}
                </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Mike Rodriguez</p>
                      <p className="text-sm text-muted-foreground">City Manager, Riverside</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  {`"My kids love competing with neighbors on the app. It's made environmental education so much easier."`}
                </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Emma Thompson</p>
                      <p className="text-sm text-muted-foreground">Parent, Oakwood District</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              {`Ready to transform your community's approach to waste management? Let's start the conversation.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Get in Touch</CardTitle>
                <CardDescription>
                  Contact us for partnerships, customer inquiries, or to learn more about our solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">hello@chakrawaste.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">123 Green Tech Ave, Sustainability City, SC 12345</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Partnership Opportunities</CardTitle>
                <CardDescription>
                  Join our network of partners working together to create a sustainable future.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90">Schedule a Demo</Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Become a Partner
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  Request Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Chakra</span>
              </div>
              <p className="text-muted-foreground mb-4">Waste Smart. Live Green.</p>
              <p className="text-sm text-muted-foreground">
                Transforming waste into valuable resources through the power of circular economy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Smart Bins
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Analytics Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog & News
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Chakra. All rights reserved. Building a circular future, one bin at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
