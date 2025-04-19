import React from 'react';
import LevelContent from '../shared/LevelContent';

const GriGriSetupGuide = ({ knowledgeLevel }) => {
  return (
    <div className="card">
      <h2 id="grigri-setup">GriGri Setup Guide for Lead Soloing</h2>
      <div className="alert" style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', border: '1px solid #e74c3c', color: '#e74c3c' }}>
        <strong>CRITICAL SAFETY INFORMATION</strong>: Improper GriGri setup for lead soloing can be fatal. 
        This guide is educational only. Seek proper training from qualified instructors before attempting.
      </div>
      
      <h3>Device Orientation</h3>
      <LevelContent
        level={knowledgeLevel}
        beginner={
          <>
            <p>
              When using a GriGri for lead soloing, the device must be oriented differently than when belaying a partner. 
              The key points to remember are:
            </p>
            <ul>
              <li>The rope from the anchor must enter the "climber side" of the GriGri</li>
              <li>The GriGri is typically flipped upside-down compared to normal belay use</li>
              <li>A chest harness is required to keep the device properly positioned</li>
            </ul>
            <p>
              Always test your setup near the ground before committing to the climb. Pull hard on the load strand 
              to verify the device locks properly.
            </p>
          </>
        }
        intermediate={
          <>
            <p>
              When using a GriGri for lead soloing, the device must be oriented differently than when belaying a partner. 
              This orientation is critical for safety:
            </p>
            <ul>
              <li>The rope from the anchor must enter the "climber side" of the GriGri</li>
              <li>The GriGri is typically flipped upside-down compared to normal belay use</li>
              <li>
                The rope path must be: anchor → protection → "climber side" of GriGri → cam 
                → "brake side" of GriGri → free end
              </li>
              <li>
                A chest harness or tether keeps the device upright on your chest, which helps with rope feed 
                and ensures the cam engages properly during a fall
              </li>
            </ul>
            <p>
              To test your setup, anchor the rope securely near ground level, set up your system, and 
              apply body weight to verify the GriGri locks as expected. Then test it with a short, controlled fall.
              Remember that Petzl does not officially endorse using the GriGri for self-belay.
            </p>
          </>
        }
        advanced={
          <>
            <p>
              The GriGri orientation for lead soloing is critical and requires specific configuration:
            </p>
            <ul>
              <li>
                <strong>HUUD Configuration</strong> (Held Upright and Upside-Down): The GriGri is 
                positioned upside-down compared to normal belaying, with the climber side receiving 
                rope from the anchor
              </li>
              <li>
                The cam side must face away from your body, and the attachment carabiner must not 
                interfere with the cam's operation
              </li>
              <li>
                The chest harness position is critical - it should hold the device high enough that the 
                rope feeds smoothly but allow the device to rotate if you invert in a fall
              </li>
              <li>
                Your chest harness/tether should be attached to the top of the GriGri (where the handle is), 
                not around the middle of the device
              </li>
              <li>
                Some advanced users modify the GriGri with keeper cord arrangements or physical modifications 
                to improve feeding, but any modification increases risk and voids the manufacturer's warranty
              </li>
              <li>
                During use, monitor for "cam creep" - the tendency of the device to gradually rotate out of 
                optimal position, especially after catches or during complex movements
              </li>
            </ul>
            <p>
              For advanced users, there are several test protocols to verify proper setup:
              1) Ground-level straight pull testing
              2) Inverted testing (verifying the GriGri still catches when you're upside down)
              3) Progressive loading (applying increasing force gradually to check smooth engagement)
              4) Device rotation check (ensuring the GriGri's position remains stable under various rope angles)
            </p>
            <p>
              Remember that GriGri+, GriGri 2, and the original GriGri all have slightly different handling characteristics 
              for solo use. The GriGri 2 is often preferred by soloists due to its balance of smooth feeding and reliable catching.
            </p>
          </>
        }
      />
      
      <h3>Required Backup Systems</h3>
      <LevelContent
        level={knowledgeLevel}
        beginner={
          <>
            <p>
              Always use backup knots when using a GriGri for lead soloing. Tie overhand knots or 
              figure-8 knots on a bight in the brake strand every 5-10 meters and clip them to your harness.
              Never climb without backup knots when learning this technique.
            </p>
          </>
        }
        intermediate={
          <>
            <p>
              Backup systems are essential when using a GriGri for lead soloing:
            </p>
            <ul>
              <li>
                <strong>Backup Knots</strong>: Tie an overhand or figure-8 on a bight in the brake strand 
                every 5-10 meters and clip to your harness gear loops
              </li>
              <li>
                <strong>Knot Spacing</strong>: Space knots closer (3-5m) when starting out or on difficult terrain, 
                and further apart (8-10m) on easier ground
              </li>
              <li>
                <strong>Clipping Strategy</strong>: Use carabiners to clip backup knots to different gear loops on
                your harness - avoid clipping all to the same point
              </li>
              <li>
                <strong>Knot Management</strong>: Each knot must be untied or unclipped as you climb past it. 
                Practice this while still on the ground
              </li>
            </ul>
          </>
        }
        advanced={
          <>
            <p>
              Advanced backup strategies for GriGri soloing include:
            </p>
            <ul>
              <li>
                <strong>Inline Prusik Backup</strong>: Some soloists add a prusik on the brake strand below 
                the GriGri as a constant backup. This doesn't require untying knots but adds friction
              </li>
              <li>
                <strong>Secondary Device Backup</strong>: Instead of knots, some use a second device like a 
                microTraxion or Duck attached below the GriGri. This is only for those who understand the 
                implications and risks of having two mechanical devices in the system
              </li>
              <li>
                <strong>Clove Hitch Dump Loop Technique</strong>: Creates a slack loop with a releasable clove hitch
                to manage rope but still provides backup. Requires significant practice to execute safely
              </li>
              <li>
                <strong>Conditional Knot Strategy</strong>: Advanced soloists may selectively place backup knots 
                only before crux sections or exposed terrain rather than at regular intervals (although this 
                approach carries additional risk)
              </li>
              <li>
                <strong>Release Under Tension Technique</strong>: Advanced users should master the technique to 
                release a loaded backup knot or device safely, which may require the use of a prusik to transfer load
              </li>
            </ul>
            <p>
              The primary/backup relationship in a solo system should be thought of as a redundant belay, 
              not just as a main system with an emergency backup. Either system should be capable of catching you 
              independently in a worst-case scenario.
            </p>
          </>
        }
      />
      
      <div className="image-placeholder" style={{ 
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        border: '1px dashed #3498db',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        margin: '1rem 0'
      }}>
        <p>
          <strong>Potential Image Location:</strong> Detailed close-up photographs demonstrating proper 
          GriGri orientation for lead soloing from multiple angles, including examples of both correct 
          and incorrect setups with clear indicators.
        </p>
      </div>
    </div>
  );
};

export default GriGriSetupGuide;
