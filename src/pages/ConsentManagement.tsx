
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowLeft, Database, Shield, AlertTriangle, CheckCircle, Calendar, Building } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface ConsentRecord {
  id: string;
  serviceName: string;
  dateGranted: string;
  dataShared: string[];
  status: 'active' | 'revoked';
  expiryDate?: string;
}

const ConsentManagement = () => {
  const navigate = useNavigate();
  const [consents, setConsents] = useState<ConsentRecord[]>([
    {
      id: '1',
      serviceName: 'SecureBank',
      dateGranted: '2024-01-15',
      dataShared: ['Full Name', 'Email Address', 'Phone Number', 'Address'],
      status: 'active',
      expiryDate: '2025-01-15'
    },
    {
      id: '2',
      serviceName: 'Healthcare Plus',
      dateGranted: '2024-02-20',
      dataShared: ['Full Name', 'Date of Birth', 'Address', 'Marital Status'],
      status: 'active'
    },
    {
      id: '3',
      serviceName: 'Job Portal Pro',
      dateGranted: '2024-01-10',
      dataShared: ['Full Name', 'Email Address', 'Job Position', 'Employer'],
      status: 'revoked'
    }
  ]);

  const [isRevoking, setIsRevoking] = useState<string | null>(null);

  const handleRevokeConsent = (consentId: string) => {
    setIsRevoking(consentId);
    
    // Simulate API call
    setTimeout(() => {
      setConsents(prev => prev.map(consent => 
        consent.id === consentId 
          ? { ...consent, status: 'revoked' as const }
          : consent
      ));
      setIsRevoking(null);
    }, 1500);
  };

  const activeConsents = consents.filter(c => c.status === 'active');
  const revokedConsents = consents.filter(c => c.status === 'revoked');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-900">Consent Management</h1>
                <p className="text-sm text-emerald-600">Manage your data sharing permissions</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/solid-pod')}
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Solid Pod
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-emerald-200 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-900">{activeConsents.length}</p>
                  <p className="text-sm text-emerald-600">Active Consents</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-900">{revokedConsents.length}</p>
                  <p className="text-sm text-emerald-600">Revoked Consents</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-900">{consents.length}</p>
                  <p className="text-sm text-emerald-600">Total Consents</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Consents */}
        <Card className="mb-8 border-emerald-200 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-emerald-900">
              <Shield className="h-6 w-6 text-emerald-600" />
              <span>Active Consents</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activeConsents.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Date Granted</TableHead>
                    <TableHead>Data Shared</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeConsents.map((consent) => (
                    <TableRow key={consent.id}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">{consent.serviceName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span>{formatDate(consent.dateGranted)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {consent.dataShared.map((data, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {data}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        {consent.expiryDate ? (
                          <span className="text-sm text-gray-600">
                            {formatDate(consent.expiryDate)}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">Never</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRevokeConsent(consent.id)}
                          disabled={isRevoking === consent.id}
                        >
                          {isRevoking === consent.id ? 'Revoking...' : 'Revoke'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8">
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No active consents found</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Revoked Consents */}
        {revokedConsents.length > 0 && (
          <Card className="border-emerald-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-emerald-900">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span>Revoked Consents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Date Granted</TableHead>
                    <TableHead>Data Shared</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revokedConsents.map((consent) => (
                    <TableRow key={consent.id} className="opacity-60">
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">{consent.serviceName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span>{formatDate(consent.dateGranted)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {consent.dataShared.map((data, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {data}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Revoked</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-teal-50 border border-teal-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-teal-900 mb-2">About Consent Management</h4>
              <ul className="text-sm text-teal-800 space-y-1">
                <li>• You can revoke consent at any time, which will immediately stop data sharing</li>
                <li>• Revoking consent may affect your ability to use certain services</li>
                <li>• All consent actions are recorded on the blockchain for transparency</li>
                <li>• Services are notified immediately when you revoke consent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentManagement;
