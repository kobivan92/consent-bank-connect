
import { Shield, User, Database, Building, Eye, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConsentFlowVisualization = () => {
  const flowSteps = [
    {
      id: 1,
      title: "Third-party Service Request",
      description: "Online service needs personal data to execute",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      position: "left"
    },
    {
      id: 2,
      title: "ConsentFlow Authentication",
      description: "User authenticates via password or digital certificate",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      position: "center"
    },
    {
      id: 3,
      title: "Redirect to Solid Pod",
      description: "ConsentFlow routes to user's personal data pod",
      icon: Database,
      color: "from-green-500 to-green-600",
      position: "right"
    },
    {
      id: 4,
      title: "Consent Request",
      description: "Service defines obligatory and optional data fields",
      icon: User,
      color: "from-orange-500 to-orange-600",
      position: "right"
    },
    {
      id: 5,
      title: "User Decision",
      description: "User grants or denies consent for data sharing",
      icon: CheckCircle,
      color: "from-teal-500 to-teal-600",
      position: "center"
    },
    {
      id: 6,
      title: "Service Execution",
      description: "Third-party proceeds based on consent result",
      icon: Building,
      color: "from-indigo-500 to-indigo-600",
      position: "left"
    }
  ];

  const multichainNodes = [
    {
      name: "User",
      icon: User,
      color: "bg-blue-500",
      description: "Data owner"
    },
    {
      name: "Service Provider",
      icon: Building,
      color: "bg-purple-500",
      description: "Data processor"
    },
    {
      name: "GDPR Regulator",
      icon: Eye,
      color: "bg-green-500",
      description: "Compliance oversight"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">How ConsentFlow Works</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, secure system for managing personal data consent with blockchain verification
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold text-center text-gray-800 mb-12">Data Consent Process Flow</h4>
          
          <div className="relative">
            {/* Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {flowSteps.map((step) => (
                <div key={step.id} className="relative">
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                        {step.id}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multichain Nodes */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">Multichain Network Nodes</h4>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            All consent management actions (get consent, provide consent, revoke consent) are immutably recorded on the multichain network
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {multichainNodes.map((node, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${node.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <node.icon className="h-8 w-8 text-white" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{node.name}</h5>
                  <p className="text-gray-600 text-sm">{node.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consent Actions */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-center">
          <h4 className="text-3xl font-bold text-white mb-6">Blockchain-Verified Actions</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h5 className="text-xl font-bold text-white mb-2">Get Consent</h5>
              <p className="text-gray-300 text-sm">Request and record data sharing permissions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h5 className="text-xl font-bold text-white mb-2">Provide Consent</h5>
              <p className="text-gray-300 text-sm">Secure transmission of approved data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <XCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h5 className="text-xl font-bold text-white mb-2">Revoke Consent</h5>
              <p className="text-gray-300 text-sm">Withdraw permissions at any time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsentFlowVisualization;
