import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {

  // Animación de fondo calmada
  @ViewChild('calmCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId: number = 0;
  private particles: any[] = [];

  ngAfterViewInit() {
    this.initCanvas();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.initCanvas();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    this.particles = [];
    const numParticles = Math.floor(window.innerWidth / 30); // Menos partículas para que sea calmado
    
    for (let i = 0; i < numParticles; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.1 + Math.random() * 0.3, // Muy lento
        size: 10 + Math.random() * 14,
        char: Math.random() > 0.5 ? '0' : '1',
        opacity: 0.02 + Math.random() * 0.05 // Muy transparente
      });
    }
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height); // Fondo transparente
    
    this.ctx.font = '14px "JetBrains Mono", monospace';
    
    for (let p of this.particles) {
      this.ctx.fillStyle = `rgba(255, 176, 0, ${p.opacity})`; // Color Ámbar
      this.ctx.fillText(p.char, p.x, p.y);
      
      p.y += p.speed;
      
      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    }
    
    this.animationFrameId = requestAnimationFrame(this.animate);
  }
}
