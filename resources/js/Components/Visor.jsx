import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const MainViewer = () => {
  const [showAnnotationModal, setShowAnnotationModal] = useState(false);
  const [showSavedFormsModal, setShowSavedFormsModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 id="titulo" className="text-xl font-semibold mb-4">Visor de Imágenes</h4>
          <h6 id="cuerpo" className="text-gray-600 mb-6"></h6>

          {/* Visor Section */}
          <section className="flex justify-center items-center mb-6">
            <div 
              id="openseadragon1" 
              className="bg-gray-200 rounded-lg"
              style={{
                width: '870px',
                height: '550px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="text-gray-500">Unable to open [object Object]: HTTP 0 attempting to load TileSource</span>
            </div>
          </section>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => setShowAnnotationModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Guardar Anotaciones
            </Button>
            <Button 
              onClick={() => setShowSavedFormsModal(true)}
              variant="secondary"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Ver Formularios Guardados
            </Button>
          </div>
        </div>

        {/* Annotation Form Modal */}
        <Dialog open={showAnnotationModal} onOpenChange={setShowAnnotationModal}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Formulario de Diagnóstico Patológico</DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <Tabs defaultValue="patient" className="w-full">
                <TabsList className="flex space-x-1 border-b w-full overflow-x-auto">
                  <TabsTrigger value="patient" className="px-4 py-2">
                    Datos del Paciente
                  </TabsTrigger>
                  <TabsTrigger value="procedure" className="px-4 py-2">
                    Procedimiento y Muestra
                  </TabsTrigger>
                  <TabsTrigger value="macro" className="px-4 py-2">
                    Descripción Macroscópica
                  </TabsTrigger>
                  <TabsTrigger value="micro" className="px-4 py-2">
                    Descripción Microscópica
                  </TabsTrigger>
                  <TabsTrigger value="biomarkers" className="px-4 py-2">
                    Pruebas y Biomarcadores
                  </TabsTrigger>
                  <TabsTrigger value="diagnosis" className="px-4 py-2">
                    Diagnóstico y Recomendaciones
                  </TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-4">
                  <TabsContent value="patient">
                    <div className="space-y-4">
                      <Input placeholder="Nombre Completo" />
                      <Input type="date" />
                      <Input placeholder="ID del Paciente" />
                    </div>
                  </TabsContent>

                  <TabsContent value="procedure">
                    <div className="space-y-4">
                      <Input type="datetime-local" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de Muestra" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="biopsy">Biopsia</SelectItem>
                          <SelectItem value="puncture">Punción</SelectItem>
                          <SelectItem value="cytology">Citología</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Localización Anatómica" />
                    </div>
                  </TabsContent>

                  <TabsContent value="macro">
                    <div className="space-y-4">
                      <Input placeholder="Dimensiones" />
                      <Input placeholder="Textura" />
                    </div>
                  </TabsContent>

                  <TabsContent value="micro">
                    <div className="space-y-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de Célula" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="squamous">Escamoso</SelectItem>
                          <SelectItem value="glandular">Glandular</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input type="number" placeholder="Índice Mitótico" />
                    </div>
                  </TabsContent>

                  <TabsContent value="biomarkers">
                    <div className="space-y-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="HER2" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="positive">Positivo</SelectItem>
                          <SelectItem value="negative">Negativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="BRCA" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brca1">BRCA1</SelectItem>
                          <SelectItem value="brca2">BRCA2</SelectItem>
                          <SelectItem value="none">Ninguno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="diagnosis">
                    <div className="space-y-4">
                      <Input placeholder="Clasificación TNM" />
                      <Textarea placeholder="Recomendaciones" className="min-h-32" />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>

              <div className="flex justify-end mt-6">
                <Button 
                  onClick={() => setShowAnnotationModal(false)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Guardar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Saved Forms Modal */}
        <Dialog open={showSavedFormsModal} onOpenChange={setShowSavedFormsModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Formularios Guardados</DialogTitle>
            </DialogHeader>
            <div id="savedFormsDetails" className="mt-4">
              {/* Aquí se mostrarían los formularios guardados */}
              <p className="text-gray-500">No hay formularios guardados.</p>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default MainViewer;