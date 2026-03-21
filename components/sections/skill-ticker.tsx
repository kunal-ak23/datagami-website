'use client'

import {
  Cloud, Server, Shield, Database, Network, Container,
  Code, Terminal, Globe, Cpu, Layers, Lock,
  Paintbrush, Glasses, Film, Clapperboard, Palette, MonitorPlay,
  Link2, Blocks, Coins, FileCode, Wallet,
  CircuitBoard, Microchip, Binary, Settings
} from 'lucide-react'
import { ReactNode } from 'react'

// Map skill names to relevant Lucide icons
const skillIconMap: Record<string, ReactNode> = {
  // Cloud Computing
  'AWS': <Cloud className="size-4" />,
  'Azure': <Server className="size-4" />,
  'GCP': <Globe className="size-4" />,
  'CCNA': <Network className="size-4" />,
  'MCSA': <Shield className="size-4" />,
  'RedHat SA1': <Terminal className="size-4" />,
  'Docker': <Container className="size-4" />,
  'Kubernetes': <Layers className="size-4" />,
  'Terraform': <Code className="size-4" />,
  'Linux': <Terminal className="size-4" />,
  'CI/CD': <Settings className="size-4" />,
  'Networking': <Network className="size-4" />,
  'IAM': <Lock className="size-4" />,
  'Serverless': <Cloud className="size-4" />,
  // Metaverse
  '3D Design': <Paintbrush className="size-4" />,
  'XR': <Glasses className="size-4" />,
  'Animation': <Film className="size-4" />,
  'Motion Graphics': <Clapperboard className="size-4" />,
  'VFX': <MonitorPlay className="size-4" />,
  'UI/UX': <Palette className="size-4" />,
  'Blender': <Paintbrush className="size-4" />,
  'Unity': <Blocks className="size-4" />,
  'Unreal Engine': <MonitorPlay className="size-4" />,
  'After Effects': <Film className="size-4" />,
  'Cinema 4D': <Clapperboard className="size-4" />,
  'Spatial Design': <Glasses className="size-4" />,
  // Blockchain
  'Solidity': <FileCode className="size-4" />,
  'Smart Contracts': <Link2 className="size-4" />,
  'DApps': <Blocks className="size-4" />,
  'Web3': <Coins className="size-4" />,
  'Ethereum': <Wallet className="size-4" />,
  'Hardhat': <Terminal className="size-4" />,
  'Ethers.js': <Code className="size-4" />,
  'IPFS': <Database className="size-4" />,
  'Tokenomics': <Coins className="size-4" />,
  'NFTs': <Wallet className="size-4" />,
  // Chip Design
  'VLSI': <CircuitBoard className="size-4" />,
  'FPGA': <Microchip className="size-4" />,
  'C/C++': <Code className="size-4" />,
  'EDA Tools': <Settings className="size-4" />,
  'Verilog': <Binary className="size-4" />,
  'SystemVerilog': <Cpu className="size-4" />,
  'Cadence': <CircuitBoard className="size-4" />,
  'Synopsys': <Microchip className="size-4" />,
  'Timing Analysis': <Settings className="size-4" />,
  'RTL Design': <Binary className="size-4" />,
}

function getSkillIcon(skill: string): ReactNode {
  return skillIconMap[skill] || <Code className="size-4" />
}

interface SkillTickerProps {
  skills: string[]
}

export function SkillTicker({ skills }: SkillTickerProps) {
  // Duplicate for seamless loop
  const allSkills = [...skills, ...skills]

  return (
    <div className="overflow-hidden py-4">
      <div className="flex animate-scroll-skills gap-4 items-center">
        {allSkills.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="flex-shrink-0 flex items-center gap-2 bg-white border border-brand/30 shadow-sm px-5 py-3 rounded-full text-sm font-medium text-dark hover:border-brand hover:shadow-md transition-all cursor-default"
          >
            <span className="text-brand">{getSkillIcon(skill)}</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
